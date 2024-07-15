import { createContext, ReactNode, useContext, useState } from 'react';

interface TabsContextProps {
  children: ReactNode;
}

interface TabsContextType {
  selectedTab: number;
  onSelect: (t: number) => void;
}

const TabsContext = createContext<TabsContextType>({ selectedTab: 0, onSelect: () => {} });

const TabsContextProvider = ({ children }: TabsContextProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const onSelect = (order: number) => setSelectedTab(order);
  return <TabsContext.Provider value={{ selectedTab, onSelect }}>{children}</TabsContext.Provider>;
};

export const useTabsContext = (): TabsContextType => {
  return useContext(TabsContext);
};

export default TabsContextProvider;
