const { username, password } = process.env;
export const connectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.zl3ea7v.mongodb.net/billsDB?retryWrites=true&w=majority&appName=Cluster0";
