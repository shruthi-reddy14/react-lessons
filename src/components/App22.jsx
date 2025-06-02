import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App22() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

const fetchData = async () => {
    const url = "localhost:8080/weather";
    const res = await axios(url);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

}

