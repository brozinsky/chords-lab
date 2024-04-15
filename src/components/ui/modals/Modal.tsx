import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Button from "../buttons/Button";

type TProps = {
  children: ReactNode;
  trigger: ReactNode;
};

export default function Modal({ children, trigger }: TProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {trigger ? trigger : <button className="cursor-pointer">Open</button>}
      </Dialog.Trigger>
      <Dialog.Overlay className="modal__overlay" />
      <Dialog.Content className="modal__content">
        <motion.div
          id="Modal"
          initial={{ y: -20, scaleX: 0.8 }}
          animate={{ y: 0, scaleX: 1 }}
          className="modal__body"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Dialog.Close className="fixed right-0 top-0">
              <Button
                isDiv
                className="fixed right-0 top-0"
                icon="close"
                size="sm"
                shape="square"
              />
            </Dialog.Close>
            {children}
          </motion.div>
        </motion.div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
