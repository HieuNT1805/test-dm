import { inject } from "mobx-react";

import { Button } from "../../Common/Button/Button";
import { Space } from "../../Common/Space/Space";



const injector = inject(({ store }) => ({
  store,
  views: store.viewsStore,
  currentView: store.currentView,
}));

export const ShiftBotton = injector(({ Size, currentView  })=>{
  let ts = Date.now();
  let date = new Date(ts);
  let year = date.getFullYear();
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  let data = `${month}.${day}.${year} 08:00`;
  const onClick =() =>{
    const filter = currentView.createFilter();

    filter.setFilterDelayed('filter:tasks:created_at');
    filter.setValue(data);
  };

  return(
    <Space style={{ fontSize: 12 }}>
      <Button
        size={Size}
        onClick={onClick}> 
      Ca 1 </Button>
      <Button 
        size={Size}
        onClick={onClick}>
       Ca 2 </Button>
    </Space>
  );
});