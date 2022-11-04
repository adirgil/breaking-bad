import React from "react";
import { MutatingDots } from "react-loader-spinner";

export default function Loader({ visible }) {
  return (
    <div data-testid="loader" className="flex justify-center">
      <MutatingDots
        height="100"
        width="100"
        color="#4d7c0f"
        secondaryColor="#4d7c0f"
        radius="15"
        visible={visible}
      />
    </div>
  );
}
