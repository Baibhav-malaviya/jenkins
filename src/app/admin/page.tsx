import AddStudentResult from "@/components/admin/AddStudentResult";
import DeleteStudentResult from "@/components/admin/DeleteStudentResult";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function Admin() {
	return (
		<div className="flex items-center justify-center w-full ">
			<Tabs
				defaultValue="add-result"
				className=" flex flex-col items-center w-full "
			>
				<TabsList>
					<TabsTrigger value="add-result">Add Result</TabsTrigger>
					<TabsTrigger value="delete-result">Delete Result</TabsTrigger>
				</TabsList>
				<TabsContent value="add-result" className="w-full">
					<AddStudentResult />
				</TabsContent>
				<TabsContent value="delete-result" className="w-full">
					<DeleteStudentResult />
				</TabsContent>
			</Tabs>
		</div>
	);
}
