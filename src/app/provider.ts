export class provider{
    data!:provider[]|any;
    name!:String;
    email!:String;
    password!:String;
    confirm_password!:String;


    insert(item:provider):provider | null {
        let newItem=Object.assign(item)
        this.data.push({...item});
        return null
      }
}