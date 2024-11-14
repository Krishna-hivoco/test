import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import CustomTable from "../components/CustomTable";
import api from "../api/axiosInstance";

function Contact() {
  const [data, setData] = useState([]);
  const heading = ["Name", "Email", "Company Name", "Message","Action"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/contact/getAll");
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <section>
        <Breadcrumb />
      </section>
      <section className="mt-8">
        <CustomTable heading={heading} data={data} />
      </section>
    </Layout>
  );
}

export default Contact;
