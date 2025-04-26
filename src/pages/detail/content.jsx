import Error from '../../components/error';
import ContentLoader from '../../components/loader/content-loader';
import Card from './card'
import { useSelector } from 'react-redux'


const Content = ({getData}) => {
// store abone ol
  const {isLoading,error,data} = useSelector((store) => store);
//data nesnesini diziye çevir
const arr = Object.entries(data || {}).filter(([key]) => key !== "flag");

  return (
    <div className='mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        isLoading ? (
        <ContentLoader/>
      ) : error ? (
         <Error info={error} refetch={getData} />
        ) : (
           arr.map((item,key) => <Card key={key} item={item} />)
          )}
      
    </div>
  );
};

export default Content
