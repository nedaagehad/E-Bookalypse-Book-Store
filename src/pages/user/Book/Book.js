import React, { lazy , Suspense }  from 'react';
import Preloader from '../../../components/Preloader/Preloader';
const BookCard = lazy(() => import('../../../components/BookCard/BookCard') );
function Book() {
  return (
    <div>
       <Suspense fallback={<Preloader />}>
        <BookCard />
        </Suspense>
    </div>
      
  )
}

export default Book