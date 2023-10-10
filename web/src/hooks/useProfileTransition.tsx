import { useRouter } from "next/navigation";
import { useTransition } from "react";

type HandleTransition = (id: number | undefined) => void;

export const useProfileTransition = (): [
  handleTransition: HandleTransition
] => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const handleTransition: HandleTransition = (id: number | undefined) => {
    if (!id) {
      return;
    }

    startTransition(() => {
      router.push(`profile/${id}`);
    });
  };

  return [handleTransition];
};
