import ContactCard from "./ContactCard";
import ErrorContainer from "./ErrorContainer";
import LoadingSpinner from "./LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Contacts = () => {
  const {
    data: contacts = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/contacts");
      return response.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorContainer />;

  return (
    <div className="flex flex-col items-center space-y-4 mt-5">
      <h1 className="text-3xl font-bold mb-4">Contacts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-5">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
