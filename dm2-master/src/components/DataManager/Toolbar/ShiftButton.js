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
  let hour1='02';
  let hour2='08';
  
  const onClick =(shift) =>{
    if(shift===2){
      hour1='08';
      hour2='13';
    }
    console.info("data",shift);
    let data = { min: `${year}-${month}-${day}T${hour1}:00:00.000Z`, max: `${year}-${month}-${day}T${hour2}:00:00.000Z` };
    const filter = currentView.createFilter();

    filter.setFilterDelayed('filter:tasks:created_at');
    filter.setOperator('in');
    filter.setValue(data);
    filter.setValue(data);
  };

  return(
    <Space style={{ fontSize: 12 }}>
      <Button
        size={Size}
        value={1}
        onClick={()=>onClick(1)}> 
      Ca 1 </Button>
      <Button 
        size={Size}
        value={2}
        onClick={()=>onClick(2)}>
       Ca 2 </Button>
    </Space>
  );
});