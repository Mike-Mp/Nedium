export default function EmployeeCard({name, avatarUrl}: {name: string, avatarUrl: string}) {
    return (
                    <a href="#" className="flex border-t-2 pt-1 pb-1 border-black items-center">
                        <img src={avatarUrl} alt={name + ' profile picture'} width="50px" height="50px" className="border-0 rounded-full"/>
                        <h4 className="text-xl ml-5">{name}</h4>
                    </a>
    )
}