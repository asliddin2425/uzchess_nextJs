"use client"
import {Divider} from "../divider";
import {Actions} from "../rightSide/actions";
import {Button} from "../../button"

export const RightSide = () => {
  return (
    <section className={"flex gap-5 items-center ml-5"}>
      <Actions/>
      <Divider/>
      <Button label={'Kirish'} icon={'/icons/log-in.svg'} onClick={() => {
      }}/>
    </section>
  );
};