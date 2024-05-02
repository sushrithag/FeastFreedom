export class user{
   data!:user[]|any;
   
    id!:number;
    first_name!:String;
    last_name!:String
    email!:String;
    password!:String;
   sequrityq1!:String;
   sequrityq2!:String;


    insert(item:user):user | null {
        let newItem=Object.assign(item)
        this.data.push({...item});
        return null
      }
}
