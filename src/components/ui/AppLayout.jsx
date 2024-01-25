import styled from "styled-components";
import Timer from "../../features/timer/Timer";
import Settings from "../../features/settings/Settings"
import CyclesTabs from "../CyclesTabs";
import Header from "../Header";
import { useState } from "react";
import CycleCount from "../CycleCount";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  position: relative;

  @media screen and (min-width: 640px) {
    max-width: 640px;
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export default function AppLayout() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <Layout>
      <Header onOpenSettings={() => setIsSettingsOpen(true)} />
      <CyclesTabs />
      <Timer />
      <CycleCount />
      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </Layout>
  );
}
