import kookminLogo from "@/assets/svg/bankLogo/kookmin.svg?url";
import hanaLogo from "@/assets/svg/bankLogo/hana.svg?url";
import nonghyeopLogo from "@/assets/svg/bankLogo/nonghyeop.svg?url";
import shinhanLogo from "@/assets/svg/bankLogo/shinhan.svg?url";

export const bankAccounts = [
  {
    bankCode: "KB",
    bankName: "국민은행",
    logo: kookminLogo,
    accountNumber: "123-45-678901",
    accountType: "보통예금",
    balance: 1000000,
    isChecked: true,
  },
  {
    bankCode: "NH",
    bankName: "농협은행",
    logo: nonghyeopLogo,
    accountNumber: "302-01-987654",
    accountType: "보통예금",
    balance: 2000000,
    isChecked: true,
  },
  {
    bankCode: "SH",
    bankName: "신한은행",
    logo: shinhanLogo,
    accountNumber: "110-234-567890",
    accountType: "저축예금",
    balance: 3000000,
    isChecked: true,
  },
  {
    bankCode: "HN",
    bankName: "하나은행",
    logo: hanaLogo,
    accountNumber: "020-123-456789",
    accountType: "보통예금",
    balance: 4000000,
    isChecked: true,
  },
  {
    bankCode: "KB",
    bankName: "국민은행",
    logo: kookminLogo,
    accountNumber: "999-88-777777",
    accountType: "외화예금",
    balance: {
      USD: 50000,
      EUR: 0,
      JPY: 0,
    },
    isChecked: true,
  },
  {
    bankCode: "SH",
    bankName: "신한은행",
    logo: shinhanLogo,
    accountNumber: "110-234-567890",
    accountType: "저축예금",
    balance: 3000000,
    isChecked: true,
  },
];
