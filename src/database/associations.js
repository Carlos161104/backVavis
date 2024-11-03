// Team 1 Associations imports
import { Order } from "../models/Order.js";
import { Sell } from "../models/Sell.js";
import { PaymentMethod } from "../models/PaymentMethod.js";
import { SaleFunnel } from "../models/SaleFunnel.js";
import { Client } from "../models/Client.js";
import { Address } from "../models/Address.js";

// Team 2 Associations imports
import { Quotation } from "../models/Quotation.js";
import { User } from "../models/User.js";
import { Product } from "../models/Product.js";
import { QuotationProduct } from "../models/QuotationProduct.js";

// Team 1 Relations

// Export function

export const applyAssociations = () => {
  try {
    // Team 1 Relations
    Order.hasMany(Sell, {
      foreignKey: "order_id",
      sourceKey: "id",
    });
    Sell.belongsTo(Order, {
      foreignKey: "order_id",
      targetKey: "id",
    });

    Order.belongsTo(PaymentMethod, {
      foreignKey: "payment_method_id",
      targetKey: "id",
    });

    PaymentMethod.hasMany(Order, {
      foreignKey: "payment_method_id",
      sourceKey: "id",
    });

    Order.belongsTo(SaleFunnel, {
      foreignKey: "sales_funnel_id",
      targetKey: "id",
    });

    SaleFunnel.hasMany(Order, {
      foreignKey: "sales_funnel_id",
      sourceKey: "id",
    });

    Order.belongsTo(Address, {
      foreignKey: "address_id",
      targetKey: "id",
    });

    Address.hasMany(Order, {
      foreignKey: "address_id",
      sourceKey: "id",
    });

    Order.belongsTo(Client, {
      foreignKey: "client_id",
      targetKey: "id",
    });

    Client.hasMany(Order, {
      foreignKey: "client_id",
      sourceKey: "id",
    });

    // Team 2 Relations
    Quotation.hasMany(QuotationProduct, {
      foreignKey: "quotation_id",
      sourceKey: "id",
    });

    QuotationProduct.belongsTo(Quotation, {
      foreignKey: "quotation_id",
      targetKey: "id",
    });

    PaymentMethod.hasMany(Quotation, {
      foreignKey: "payment_method_id",
      sourceKey: "id",
    });

    Quotation.belongsTo(PaymentMethod, {
      foreignKey: "payment_method_id",
      targetKey: "id",
    });

    Client.hasMany(Quotation, {
      foreignKey: "client_id",
      sourceKey: "id",
    });

    Quotation.belongsTo(Client, {
      foreignKey: "client_id",
      targetKey: "id",
    });

    User.hasMany(Quotation, {
      foreignKey: "user_id",
      sourceKey: "id",
    });

    Quotation.belongsTo(User, {
      foreignKey: "user_id",
      targetKey: "id",
    });

    console.log("Associations applied successfully");
  } catch (error) {
    console.error("Error applying associations: ", error);
  }
};
