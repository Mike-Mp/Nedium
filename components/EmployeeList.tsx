import {faker} from '@faker-js/faker'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
const EmployeeCard = dynamic(() => import('../components/EmployeeCard'), {
    ssr: false
})

interface EmployeeInfo {
    name: string;
    avatarUrl: string;
}

export default function EmployeeList() {
    const [workerList, setWorkerList] = useState<EmployeeInfo[] >([
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },           
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
            {
                name: faker.name.findName(),
                avatarUrl: faker.image.avatar(),
            },
    ]);

    return (
            <div className="grid grid-rows-4 grid-cols-3 gap-5 ml-3 mr-3 mb-10 border-b-2 border-black pb-1">

                {workerList.length === 0 ? "loading" : workerList.map((item) => (
                    <div key={item.name}>
                        <EmployeeCard name={item.name} avatarUrl={item.avatarUrl} />
                    </div>
                ))
                }

            </div>
    )
}

