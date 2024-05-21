import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure
} from "@chakra-ui/react";

const UploadPhoto=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  function handleButtonClick() {
    setIsLoading(true);
    // perform some async operation
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 2000);
  }

  return (
    <>
     <div className={boxCss} onClick={onOpen}>
                        <svg className="w-20 h-20 text-theme fill-current" viewBox="0 0 24 24">
                            <path d="M12 13.5A4.5 4.5 0 1 0 7.5 9 4.5 4.5 0 0 0 12 13.5zm0 2.25c-2.766 0-8.25 1.383-8.25 4.125v.75h16.5v-.75c0-2.742-5.484-4.125-8.25-4.125z" />
                        </svg>
                    </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            This is the modal content. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Integer posuere erat a ante.
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleButtonClick}
              isLoading={isLoading}
            >
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UploadPhoto;

const boxCss = "w-full flex justify-center items-center border-[0.1rem] border-dotted border-gray-600 py-7 rounded-sm"
