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
  },
  {
    bankCode: "NH",
    bankName: "농협은행",
    logo: nonghyeopLogo,
    accountNumber: "302-01-987654",
    accountType: "보통예금",
  },
  {
    bankCode: "SH",
    bankName: "신한은행",
    logo: shinhanLogo,
    accountNumber: "110-234-567890",
    accountType: "저축예금",
  },
  {
    bankCode: "HN",
    bankName: "하나은행",
    logo: hanaLogo,
    accountNumber: "020-123-456789",
    accountType: "보통예금",
  },
];
