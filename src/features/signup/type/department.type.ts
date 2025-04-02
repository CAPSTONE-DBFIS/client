export type departmentListType = {
    id: string
    companyName: string
    departments: departmentsType[]
}

type departmentsType = {
    department: string
    children: {
        department: string
    }[]
}
