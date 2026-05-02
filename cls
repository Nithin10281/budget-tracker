[1mdiff --git a/app/(dashboard)/transactions/page.tsx b/app/(dashboard)/transactions/page.tsx[m
[1mindex db6ae6f..438add2 100644[m
[1m--- a/app/(dashboard)/transactions/page.tsx[m
[1m+++ b/app/(dashboard)/transactions/page.tsx[m
[36m@@ -1,310 +1,2 @@[m
[32m+[m[32mexport const dynamic = "force-dynamic";[m
 // "use client"[m
[31m-[m
[31m-// import { Button } from "@/components/ui/button";[m
[31m-// import { [m
[31m-//     Card,[m
[31m-//     CardContent,[m
[31m-//     CardHeader,[m
[31m-//     CardTitle,[m
[31m-// } from "@/components/ui/card";[m
[31m-// import { columns } from "@/app/(dashboard)/transactions/columns";[m
[31m-// import { DataTable } from "@/components/data-table";[m
[31m-// import { ImportCard } from "@/app/(dashboard)/transactions/import-card";[m
[31m-// import { Loader2 } from "lucide-react";[m
[31m-// import { Plus } from "lucide-react";[m
[31m-// import { Skeleton } from "@/components/ui/skeleton";[m
[31m-// import { toast } from "sonner";[m
[31m-// import { transactions as transactoinSchema } from "@/db/schema";[m
[31m-// import { csvConfig } from "@/app/(dashboard)/transactions/export-button";[m
[31m-// import { useBulkCreateTransactions } from "@/features/transactions/api/use-bulk-create-transactions";[m
[31m-// import { useBulkDeleteTransactions } from "@/features/transactions/api/use-bulk-delete-transactions";[m
[31m-// import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";[m
[31m-// import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";[m
[31m-// import { useSelectAccount } from "@/features/accounts/hooks/use-select-account";[m
[31m-// import { useState } from "react";[m
[31m-[m
[31m-// enum VARIANTS {[m
[31m-//     LIST = "LIST",[m
[31m-//     IMPORT = "IMPORT"[m
[31m-// }; [m
[31m-[m
[31m-// const INITIAL_IMPORT_RESULTS = {[m
[31m-//     data: [],[m
[31m-//     errors: [],[m
[31m-//     meta: {},[m
[31m-// };[m
[31m-[m
[31m-[m
[31m-// const TransactionsPage = () => {[m
[31m-//     const [AccountDialog, confirm] = useSelectAccount();[m
[31m-//     const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);[m
[31m-//     const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS);[m
[31m-[m
[31m-//     const onUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {[m
[31m-//         console.log({results});[m
[31m-//         setImportResults(results);[m
[31m-//         setVariant(VARIANTS.IMPORT);[m
[31m-//     };[m
[31m-[m
[31m-//     const onCancelImport = () => {[m
[31m-//         setImportResults(INITIAL_IMPORT_RESULTS);[m
[31m-//         setVariant(VARIANTS.LIST);[m
[31m-//     };[m
[31m-[m
[31m-//     const newTransaction = useNewTransaction();[m
[31m-//     const createTransactions = useBulkCreateTransactions();[m
[31m-//     const deleteTransactions = useBulkDeleteTransactions();[m
[31m-//     const transactionsQuery = useGetTransactions();[m
[31m-//     const transactions = transactionsQuery.data || [];[m
[31m-[m
[31m-//     const isDisabled = [m
[31m-//         transactionsQuery.isLoading || [m
[31m-//         deleteTransactions.isPending;[m
[31m-[m
[31m-//     const onSubmitImport = async ([m
[31m-//         values: typeof transactoinSchema.$inferInsert[],[m
[31m-//     ) => {[m
[31m-//         const accountId = await confirm();[m
[31m-[m
[31m-//         if(!accountId) {[m
[31m-//             return toast.error("Please select an Account to continue.");[m
[31m-//         }[m
[31m-[m
[31m-//         const data = values.map((value) => ({[m
[31m-//             ...value,[m
[31m-//             accountId: accountId as string,[m
[31m-//         }));[m
[31m-[m
[31m-//         createTransactions.mutate(data, {[m
[31m-//             onSuccess: () => {[m
[31m-//                 onCancelImport();[m
[31m-//         },[m
[31m-//         }); [m
[31m-//     };[m
[31m-[m
[31m-//     if(transactionsQuery.isLoading) {[m
[31m-//         return ([m
[31m-//             <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">[m
[31m-//                 <Card className="border-none drop-shadow-sm">[m
[31m-//                     <CardHeader>[m
[31m-//                         <Skeleton className="h-8 w-48"/>[m
[31m-//                     </CardHeader>[m
[31m-//                     <CardContent>[m
[31m-//                         <div className="h-[500px] w-full flex items-center justify-center">[m
[31m-//                             <Loader2 className="size-6 text-slate-300 animate-spin"/>[m
[31m-//                         </div>[m
[31m-//                     </CardContent>[m
[31m-//                 </Card>[m
[31m-//             </div>[m
[31m-//         );[m
[31m-//     }[m
[31m-[m
[31m-//     if(variant === VARIANTS.IMPORT) {[m
[31m-//         return ([m
[31m-//             <>  [m
[31m-//                 <AccountDialog />[m
[31m-//                 <ImportCard [m
[31m-//                     data={importResults.data}[m
[31m-//                     onCancel={onCancelImport}[m
[31m-//                     onSubmit={ onSubmitImport }[m
[31m-//                 />[m
[31m-//             </>[m
[31m-//         )[m
[31m-//     }[m
[31m-[m
[31m-//     return ([m
[31m-//         <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">[m
[31m-//             <Card className="border-none drop-shadow-sm">[m
[31m-//                 <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">[m
[31m-//                     <CardTitle className="test-xl line-clamp-1">[m
[31m-//                         Transaction History[m
[31m-//                         <span className="text-xl"> (Only transactions made in the given range are visible)</span>[m
[31m-//                     </CardTitle>[m
[31m-//                     <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">[m
[31m-//                     <Button [m
[31m-//                         onClick={newTransaction.onOpen} [m
[31m-//                         size="sm"[m
[31m-//                         className="w-full lg:w-auto"[m
[31m-//                     >[m
[31m-//                         <Plus className="size-4 mr-2"/>[m
[31m-//                             Add new[m
[31m-//                     </Button>[m
[31m-//                     <Button>[m
[31m-//                         <UploadButton onUpload={onUpload} />[m
[31m-//                     </Button>[m
[31m-//                     </div>[m
[31m-//                 </CardHeader>[m
[31m-//                 <CardContent>[m
[31m-//                     <DataTable[m
[31m-//                         filterKey="payee"[m
[31m-//                         columns={columns} [m
[31m-//                         data={transactions}[m
[31m-//                         onDelete={(row) => {[m
[31m-//                             const ids = row.map((r) => r.original.id);[m
[31m-//                             deleteTransactions.mutate({ ids });[m
[31m-//                         }}[m
[31m-//                         disabled={isDisabled}[m
[31m-//                     />[m
[31m-//                 </CardContent>[m
[31m-//             </Card>[m
[31m-//         </div>[m
[31m-//     );[m
[31m-// };[m
[31m-[m
[31m-// export default TransactionsPage;[m
[31m-[m
[31m-[m
[31m-[m
[31m-[m
[31m-[m
[31m-"use client";[m
[31m-[m
[31m-import { Button } from "@/components/ui/button";[m
[31m-import { [m
[31m-    Card,[m
[31m-    CardContent,[m
[31m-    CardHeader,[m
[31m-    CardTitle,[m
[31m-} from "@/components/ui/card";[m
[31m-import { columns } from "@/app/(dashboard)/transactions/columns";[m
[31m-import { DataTable } from "@/components/data-table";[m
[31m-import { ImportCard } from "@/app/(dashboard)/transactions/import-card";[m
[31m-import { Loader2 } from "lucide-react";[m
[31m-import { Plus } from "lucide-react";[m
[31m-import { Skeleton } from "@/components/ui/skeleton";[m
[31m-import { toast } from "sonner";[m
[31m-import { transactions as transactoinSchema } from "@/db/schema";[m
[31m-import { useBulkCreateTransactions } from "@/features/transactions/api/use-bulk-create-transactions";[m
[31m-import { useBulkDeleteTransactions } from "@/features/transactions/api/use-bulk-delete-transactions";[m
[31m-import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";[m
[31m-import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";[m
[31m-import { useSelectAccount } from "@/features/accounts/hooks/use-select-account";[m
[31m-import { useState } from "react";[m
[31m-import ExportButton from "@/app/(dashboard)/transactions/ExportButton";[m
[31m-[m
[31m-enum VARIANTS {[m
[31m-    LIST = "LIST",[m
[31m-    IMPORT = "IMPORT"[m
[31m-}; [m
[31m-[m
[31m-const INITIAL_IMPORT_RESULTS = {[m
[31m-    data: [],[m
[31m-    errors: [],[m
[31m-    meta: {},[m
[31m-};[m
[31m-[m
[31m-const TransactionsPage = () => {[m
[31m-    const [AccountDialog, confirm] = useSelectAccount();[m
[31m-    const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);[m
[31m-    const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS);[m
[31m-[m
[31m-    const onUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {[m
[31m-        console.log({results});[m
[31m-        setImportResults(results);[m
[31m-        setVariant(VARIANTS.IMPORT);[m
[31m-    };[m
[31m-[m
[31m-    const onCancelImport = () => {[m
[31m-        setImportResults(INITIAL_IMPORT_RESULTS);[m
[31m-        setVariant(VARIANTS.LIST);[m
[31m-    };[m
[31m-[m
[31m-    const newTransaction = useNewTransaction();[m
[31m-    const createTransactions = useBulkCreateTransactions();[m
[31m-    const deleteTransactions = useBulkDeleteTransactions();[m
[31m-    const transactionsQuery = useGetTransactions();[m
[31m-    const transactions = transactionsQuery.data || [];[m
[31m-[m
[31m-    const isDisabled = [m
[31m-        transactionsQuery.isLoading || [m
[31m-        deleteTransactions.isPending;[m
[31m-[m
[31m-    const onSubmitImport = async ([m
[31m-        values: typeof transactoinSchema.$inferInsert[],[m
[31m-    ) => {[m
[31m-        const accountId = await confirm();[m
[31m-[m
[31m-        if(!accountId) {[m
[31m-            return toast.error("Please select an Account to continue.");[m
[31m-        }[m
[31m-[m
[31m-        const data = values.map((value) => ({[m
[31m-            ...value,[m
[31m-            accountId: accountId as string,[m
[31m-        }));[m
[31m-[m
[31m-        createTransactions.mutate(data, {[m
[31m-            onSuccess: () => {[m
[31m-                onCancelImport();[m
[31m-            },[m
[31m-        }); [m
[31m-    };[m
[31m-[m
[31m-    if(transactionsQuery.isLoading) {[m
[31m-        return ([m
[31m-            <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">[m
[31m-                <Card className="border-none drop-shadow-sm">[m
[31m-                    <CardHeader>[m
[31m-                        <Skeleton className="h-8 w-48"/>[m
[31m-                    </CardHeader>[m
[31m-                    <CardContent>[m
[31m-                        <div className="h-[500px] w-full flex items-center justify-center">[m
[31m-                            <Loader2 className="size-6 text-slate-300 animate-spin"/>[m
[31m-                        </div>[m
[31m-                    </CardContent>[m
[31m-                </Card>[m
[31m-            </div>[m
[31m-        );[m
[31m-    }[m
[31m-[m
[31m-    if(variant === VARIANTS.IMPORT) {[m
[31m-        return ([m
[31m-            <>  [m
[31m-                <AccountDialog />[m
[31m-                <ImportCard [m
[31m-                    data={importResults.data}[m
[31m-                    onCancel={onCancelImport}[m
[31m-                    onSubmit={ onSubmitImport }[m
[31m-                />[m
[31m-            </>[m
[31m-        )[m
[31m-    }[m
[31m-[m
[31m-    return ([m
[31m-        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">[m
[31m-            <Card className="border-none drop-shadow-sm">[m
[31m-                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">[m
[31m-                    <CardTitle className="test-xl line-clamp-1">[m
[31m-                        Transaction History[m
[31m-                        <span className="text-xl"> (Only transactions made in the given range are visible)</span>[m
[31m-                    </CardTitle>[m
[31m-                    <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">[m
[31m-                    <Button [m
[31m-                        onClick={newTransaction.onOpen} [m
[31m-                        size="sm"[m
[31m-                        className="w-full lg:w-auto"[m
[31m-                    >[m
[31m-                        <Plus className="size-4 mr-2"/>[m
[31m-                            Add new[m
[31m-                    </Button>[m
[31m-                    <ExportButton data={transactions} />[m
[31m-                    </div>[m
[31m-                </CardHeader>[m
[31m-                <CardContent>[m
[31m-                    <DataTable[m
[31m-                        filterKey="payee"[m
[31m-                        columns={columns} [m
[31m-                        data={transactions}[m
[31m-                        onDelete={(row) => {[m
[31m-                            const ids = row.map((r) => r.original.id);[m
[31m-                            deleteTransactions.mutate({ ids });[m
[31m-                        }}[m
[31m-                        disabled={isDisabled}[m
[31m-                    />[m
[31m-                </CardContent>[m
[31m-            </Card>[m
[31m-        </div>[m
[31m-    );[m
[31m-};[m
[31m-[m
[31m-export default TransactionsPage;[m
