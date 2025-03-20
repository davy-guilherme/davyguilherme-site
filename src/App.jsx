import './App.css'

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n"; // Importa a configuração do i18next

import HomePage from './pages/Home'

function App() {

  const { t, i18n } = useTranslation();

  return (
    <>
      <HomePage />
    </>
  )
}

export default App
