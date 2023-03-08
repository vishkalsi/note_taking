import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotesList from './components/NotesList';
// import Header from './components/Header';
import NoteEditor from './components/NoteEditor.js';
const RoutesPages = () => (
  <Routes>
    <Route  path="/" element={<NotesList />} />
    <Route path="/notes/:id" element={<NoteEditor />} />
  </Routes>
);
export default RoutesPages;
