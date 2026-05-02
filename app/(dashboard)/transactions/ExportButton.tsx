// import { Button } from "@/components/ui/button";
// import { generateCsv } from "export-to-csv"; // Import the function directly from the library

// // Define Transaction type inline
// interface Transaction {
//   id: string;
//   payee: string;
//   amount: number;
//   date: string;
//   // Add any other necessary fields here
// }

// // Define CSV options directly
// const csvOptions = {
//   filename: "transactions", // Set filename for the CSV
//   fieldSeparator: ",", // Set the field separator (comma for CSV)
//   decimalSeparator: ".", // Decimal separator for numbers
//   showLabels: true, // Include column labels in the CSV
//   useKeysAsHeaders: true, // Use keys of the objects as headers
// };

// interface ExportButtonProps {
//   data: Transaction[]; // Use the defined Transaction type for the data prop
// }

// const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
//   const handleExportCSV = () => {
//     if (data && data.length > 0) {
//       // Generate CSV content using the options and data
//       const csvOutput = generateCsv(csvOptions)(data.map(transaction => ({ ...transaction })));

//       // Convert CsvOutput to string
//       const csvString = csvOutput.toString();

//       // Create a Blob from the generated CSV string
//       const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

//       // Create a temporary anchor element to trigger the download
//       const link = document.createElement("a");
//       link.href = URL.createObjectURL(blob);
//       link.download = `${csvOptions.filename}.csv`;
//       link.click(); // Trigger download
//     } else {
//       alert("No data available to export");
//     }
//   };

//   return (
//     <Button onClick={handleExportCSV} className="bg-blue-500 text-white">
//       Export Transactions as CSV
//     </Button>
//   );
// };

// export default ExportButton;




import { Button } from "@/components/ui/button";
import { generateCsv } from "export-to-csv";

// Define Transaction type inline
interface Transaction {
  id: string;
  payee: string;
  amount: number;
  date: string;
  // Add any other necessary fields here
}

// Define CSV options directly
const csvOptions = {
  filename: "transactions", // Set filename for the CSV
  fieldSeparator: ",", // Set the field separator (comma for CSV)
  decimalSeparator: ".", // Decimal separator for numbers
  showLabels: true, // Include column labels in the CSV
  useKeysAsHeaders: true, // Use keys of the objects as headers
};

interface ExportButtonProps {
  data: Transaction[]; // Use the defined Transaction type for the data prop
}

const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
  const handleExportCSV = () => {
    if (data && data.length > 0) {
      // Generate CSV content using the options and data
      const csvOutput = generateCsv(csvOptions)(data.map(transaction => ({ ...transaction })));

      // Convert CsvOutput to string
      const csvString = csvOutput.toString();

      // Create a Blob from the generated CSV string
      const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

      // Create a temporary anchor element to trigger the download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${csvOptions.filename}.csv`;
      link.click(); // Trigger download
    } else {
      alert("No data available to export");
    }
  };

  return (
    <Button onClick={handleExportCSV} className="w-full lg:w-auto bg-blue-500 text-white">
      Export Transactions as CSV
    </Button>
  );
};

export default ExportButton;
