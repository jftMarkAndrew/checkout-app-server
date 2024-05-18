export interface Item {
  id: number;
  name: string;
  description?: string;
  defaultAmount: number;
  quantity?: number;
  fundingAmount?: number;
  platformFee?: number;
  vendorId?: string;
  imageUrl?: string;
}
