class Phone {
    id : string;
    type : string;
    serial : string;
    color : string;
    data : string;

    constructor(index : string, phoneType : string, serial : string, color : string, hashData : string) {
        this.id = index;
        this.type = phoneType;
        this.serial = serial;
        this.color = color;
        this.data = hashData;
      }
  }


class PhoneDB {

    db : Map<string, Phone>;
    index : number;


    constructor() {

    this.db = new Map<string, Phone>();
    
    let phone = new Phone("1", "iPhone13", "serial12345567890", "Silver", "trhvukiyg54vc3xtcrx3wcy64vy54v")
    this.db.set("1", phone);     
    phone = new Phone("2", "iPhone12", "serial123455678901", "Silver", "trhvukiyrtbujy5457vtscvbkbj3xtcrx3wcy64vy54v")
    this.db.set("2", phone);   
    phone = new Phone("3", "iPhone12", "serial123455678901", "Silver", "trhvukiyrtbujy5457vtscvbkbj3xtcrx3wcy64vy54v")
    this.db.set("3", phone);   
    phone = new Phone("4","iPhone12", "serial123455678901", "Silver", "trhvukiyrtbujy5457vtscvbkbj3xtcrx3wcy64vy54v")
    this.db.set("4", phone);   
    phone = new Phone("5", "iPhone12", "serial123455678901", "Silver", "trhvukiyrtbujy5457vtscvbkbj3xtcrx3wcy64vy54v")
    this.db.set("5", phone);   

    this.index = 5;


    }

    
    getAllPhones(): Array<Phone> {  
      const phones = Array.from( this.db.values());
       return phones;
    }


    getPhone(index : string) : Phone {
      const phone =  this.db.get(index)
      console.log(phone);
      return phone;
    }

    updatePhone(phone : Phone) : boolean {
      const existingPhone =  this.db.get(phone.id)
      if(existingPhone !== undefined){
         this.db.set(phone.id, phone);
         return true;
      } else{
        console.log("phone object not found:" +JSON.stringify(phone));
        return false;
      }
    }

    addPhone(phone : Phone) : string {
      this.index ++;
      phone.id = this.index.toString(10);
      const result = this.db.set(phone.id, phone);
      if(result !== undefined){
        return phone.id;
      }
    }

    deletePhone(index : string) : boolean {
      const result = this.db.delete(index);
      console.log("deleted index? " + index + " " + result);
      return result;
    }
  }


  function start(): PhoneDB {
    const db = new PhoneDB();
    return db;
  }

  module.exports = {
    start: start
  }