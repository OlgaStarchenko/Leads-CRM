import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { Header } from "./../components/header/Header";
import { Stats } from "./../components/stats/Stats";
import { Filters } from "./../components/filters/Filters";
import { LeadsTable } from "./../components/leadsTable/LeadsTable";
import { LeadForm } from "./../components/leadForm/LeadForm";
import { instance } from "./../instance";

export function App() {
  const [leads, setLeads] = useState([]);
  const [hasModalOpen, setHasModalOpen] = useState(false);

  function getLeads() {
    instance.get("/api/leads").then((res) => {
      setLeads(res.data);
      console.log(res);
    });
  }
  useEffect(() => {
    getLeads();
  }, []);

  function addLead(lead) {
    instance.post("/api/leads", lead).then((data) => {
      getLeads();
      console.log(data);
    });

    // setLeads((prevLeads) => [...prevLeads, lead]);
  }

  function openModal() {
    setHasModalOpen(true);
  }

  function closeModal() {
    setHasModalOpen(false);
  }
  console.log(leads);

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
