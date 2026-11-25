import { useState } from "react";
import styles from "./app.module.css";
import { Header } from "./../components/header/Header";
import { Stats } from "./../components/stats/Stats";
import { Filters } from "./../components/filters/Filters";
import { LeadsTable } from "./../components/leadsTable/LeadsTable";
import { LeadForm } from "./../components/leadForm/LeadForm";

export function App() {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Маша",
      phone: "+79990000000",
      service: "Разработка сайта",
      status: "new",
      price: 50000,
      created_at: "2026-11-16",
    },
    {
      id: 2,
      name: "Иван",
      phone: "+79990000001",
      service: "Дизайн",
      status: "in_progress",
      price: 30000,
      created_at: "2026-11-15",
    },
    {
      id: 3,
      name: "Олег",
      phone: "+79990000002",
      service: "Лендинг",
      status: "done",
      price: 70000,
      created_at: "2026-11-14",
    },
    {
      id: 4,
      name: "Олег",
      phone: "+79990000002",
      service: "Лендинг",
      status: "canceled",
      price: 70000,
      created_at: "2026-11-14",
    },
  ]);
  const [hasModalOpen, setHasModalOpen] = useState(false);

  function addLead(lead) {
    setLeads(() => {
      [...leads, lead];
    });
    return leads;
  }
  function openModal() {
    setHasModalOpen(true);
  }
  function closeModal() {
    setHasModalOpen(false);
  }

  return (
    <div className={styles.main__container}>
      <Header />
      <Stats />
      <Filters openModal={openModal} />
      <LeadsTable leads={leads} />
      {hasModalOpen && <LeadForm addLead={addLead} closeModal={closeModal} />}
    </div>
  );
}
