import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';
import { getClientDetail, getClientReport } from './require';
import { Client } from '../../api/interface';
import { Case } from '../../api/Reports';
import Filter from '../../components/Filter';

interface Time {
  startDate: string;
  endDate: string;
}

const INITIAL_STATE = {
  startDate: "2021-03-01",
  endDate: "2022-03-25"
}

const Report = () => {
  const [clientDetail, setClientDetail] = useState<Case[]>([]);
  const [clientId, setClientId] = useState<number>(0);
  const [users, setUsers] = useState<Client[]>([]);
  const [filterDate, setFilterDate] = useState<Time>(INITIAL_STATE); 

  useEffect(() => {
    const getClients = async () => {
      await getClientReport()
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log('todo mal' + err);
      });
    }

    getClients();
  }, []);

  useEffect(() => {
    const getDetails = async (id: number, filter: Time) => { 

      await getClientDetail(id, filter.startDate, filter.endDate)
      .then((res) => {
        setClientDetail(res.results)
      })
      .catch((err) => {
        console.log('todo mal' + err);
      })
    }

    if (clientId) getDetails(clientId, filterDate);
  }, [clientId, filterDate]);

  return (
    <Sidebar elements={users} setElement={setClientId}>
      <section>
        <article className="mb-10 mt-5">
          <h3 className="uppercase">Reportes</h3>
        </article>
        <article className="mb-10 w-full">
          <div className="flex justify-end items-center gap-4">
            <p>Filtrar</p>
            <div className=" w-80">
              <Filter date={filterDate} setDate={setFilterDate} />
            </div>
          </div>
        </article>
        <article>
          <Table elements={clientDetail}/>
        </article>
      </section>
    </Sidebar>
  )
}

export default Report;
