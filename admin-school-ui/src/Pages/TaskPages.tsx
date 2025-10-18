import { ChevronLeftIcon } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';


// Then in your component, use it like so:
export default function TaskPage()  {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    function goBack() {
        navigate(-1); // Navigate back to the previous page
    }

    return (
        <div className='h-screen w-screen bg-slate-500 p-6'>
            <div className="w-[500px] space-y-4">
            <div className="flex justify-center relative">
                <button onClick={goBack} className='absolute left-0 top-0 bottom-0 mb-6'><ChevronLeftIcon /></button>
                <h1 className="text-3xl text-slate-100 font-bold text-center">
                    Details Task
                </h1>
            </div>
            <div className="bg-slate-400 p-4 rounded-md">
                <h2 className="text-xl text-white font-bold text-slate-600">{title}</h2>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
      </div>
    );
}
