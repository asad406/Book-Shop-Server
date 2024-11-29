import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrderIntoDB = async(order:TOrder) => {
    const data = new Order(order)
    const result = await data.save()
    return result
}
const calculateTotalRevenue = async()=>{
    const revenueData = await Order.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: {
                    $sum : {
                        $multiply : ["$totalPrice", "$quantity"]
                    }
                }
            }
        }
    ])
    const totalRevenue = revenueData[0]?.totalRevenue || 0
    console.log(revenueData);
    return {totalRevenue : totalRevenue}
}
export const OrderService = {
    createOrderIntoDB,
    calculateTotalRevenue
}