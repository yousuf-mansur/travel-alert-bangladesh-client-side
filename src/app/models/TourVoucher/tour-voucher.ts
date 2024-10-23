// tour-voucher.model.ts
export interface TourVoucher {
    tourVoucherID: number;
    tourVoucherCode: string;
    voucherUrl: string | null;
  }
  
  export interface TourVoucherInsertModel {
    tourVoucherCode: string;
    voucherFile?: File; 
  }
  
  
