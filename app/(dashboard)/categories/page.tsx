"use client"

import { Button } from "@/components/ui/button";
import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { columns } from "@/app/(dashboard)/categories/columns";
import { DataTable } from "@/components/data-table";
import { Loader2 } from "lucide-react";
import { Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useBulkDeleteCategories } from "@/features/categories/api/use-bulk-delete-category";
import { useGetCategories } from "@/features/categories/api/use-get-categories";
import { useNewCategory } from "@/features/categories/hooks/use-new-category";

const CategoriesPage = () => {
    const newCategory = useNewCategory();
    const deleteCategories = useBulkDeleteCategories();
    const categoriesQuery = useGetCategories();
    const categories = categoriesQuery.data || [];

    const isDisabled = 
        categoriesQuery.isLoading || 
        deleteCategories.isPending;

    if(categoriesQuery.isLoading) {
        return (
            <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
                <Card className="border-none drop-shadow-sm">
                    <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                        <Skeleton className="h-8 w-48"/>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[500px] w-full flex items-center justify-center">
                            <Loader2 className="size-6 text-slate-300 animate-spin"/>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="test-xl line-clamp-1">
                        Categories page
                    </CardTitle>
                    <Button onClick={newCategory.onOpen} className="sm">
                        <Plus className="size-4 mr-2" />
                        Add new
                    </Button>
                </CardHeader>
                <CardContent>
                    <DataTable
                        filterKey="name"
                        columns={columns} 
                        data={categories}
                        onDelete={(row) => {
                            const ids = row.map((r) => r.original.id);
                            deleteCategories.mutate({ ids });
                        }}
                        disabled={isDisabled}
                    />
                </CardContent>
            </Card>
        </div>
    );
};

export default CategoriesPage;