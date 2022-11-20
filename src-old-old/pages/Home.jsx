
import PaginationButton from '../components/pagination/PaginationButton';
import PaginationSelector from '../components/pagination/PaginationSelector';

import Cards from '../components/presentation/Cards';

export default function Home({itensPerPage, setItensPerPage, limit, setCurrentPage, pages, currentItens, setSelectedItem}){
    return (
        <div>
            <PaginationSelector itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} pageSequence={[limit]}/>

            <PaginationButton setCurrentPage={setCurrentPage} pages={pages}/>

            <Cards currentItens={currentItens}/>
        </div>
    )
}