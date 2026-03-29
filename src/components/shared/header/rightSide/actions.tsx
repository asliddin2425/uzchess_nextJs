import {Action} from "./action";

export const Actions = () => {
  return (
    <div className={"flex gap-6"}>
      <Action icon={'/icons/search.svg'} onClick={() => {}}/>

      <Action icon={'/icons/empty-cart.svg'} onClick={() => {}}/>

      <Action icon={'/icons/notifications.svg'} onClick={() => {}}/>
    </div>
  );
};