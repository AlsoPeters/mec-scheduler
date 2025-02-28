import { useSupabase } from '../context/supabaseContext'

const TestDatabaseFetch = () => {
    const supabase = useSupabase()

    const fetchData = async () => {
        const { data, error } = await supabase.from('students').select('*')
        if (error) console.error('Error:', error)
        else console.log('Data:', data)
    }



    return (
        <button onClick={fetchData} className='bg-blue-500 text-white p-2 rounded'>Test Fetch Students</button>
    )
}


export default TestDatabaseFetch