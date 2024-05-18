export interface Item {
  id: number;
  name: string;
  description?: string;
  amount: number;
  quantity?: number;
  fundingAmount?: number;
  platformFee?: number;
  vendorId?: string;
  imageUrl?: string;
}
