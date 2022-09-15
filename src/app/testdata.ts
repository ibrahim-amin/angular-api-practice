import { InMemoryDbService } from "angular-in-memory-web-api";

export class TestData implements InMemoryDbService{

createDb() {
    let bookDetails=[
        {id:100,name:'Angular',category:'IT',writer:'Miftah'},
     ]
            return {books:bookDetails}
     
    
}


}