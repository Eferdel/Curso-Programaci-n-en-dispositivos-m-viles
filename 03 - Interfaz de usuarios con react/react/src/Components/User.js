function User({ name, age, skills }) {
    return (
        <>
            <h1 className="text-3xl font-bold underline mt-10">Tarjeta usuario</h1>
            <div className="items-center justify-between space-x-5 mx-auto">
                <div className="items-start space-x-5">
                    <div className="pt-1.5">
                        <h2 className="text-2xl font-fold text-gray-900">
                            {name} ({age} años)
                        </h2>
                        <p className="text-sm font-medium text-gray-500">{skills}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
