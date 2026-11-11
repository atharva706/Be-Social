import {
  CheckCircleIcon,
  ExternalLinkIcon,
  XIcon,
} from "lucide-react";
import { PLATFORMS } from "../assets/assets";

interface PlatformPickerModalProps {
  connectedIds: string[];
  connecting: string | null;
  onClose: () => void;
  onConnect: (platformId: string) => void;
}

const PlatformPickerModal = ({
  connectedIds,
  connecting,
  onClose,
  onConnect,
}: PlatformPickerModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 shadow">
          <h3 className="text-slate-700">Choose a platform</h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 transition-all hover:bg-slate-100"
          >
            <XIcon className="size-4" />
          </button>
        </div>

        {/* Platform list */}
        <div className="flex flex-col gap-2 p-6">
          {PLATFORMS.map((P) => {
            const isConnected = connectedIds.includes(P.id);
            const isConnecting = connecting === P.id;

            return (
              <button
                key={P.id}
                onClick={() => onConnect(P.id)}
                disabled={isConnected || isConnecting}
                className="flex w-full items-center gap-3 rounded-xl border border-slate-100 p-4 text-left transition-all hover:bg-slate-50 disabled:cursor-not-allowed"
              >
                {/* Icon */}
                <div>
                  <P.icon
                    className={`size-5 ${isConnected ? "text-red-600" : "text-slate-600"}`}
                  />
                </div>

                {/* Label */}
                <div className="min-w-0 flex-1">
                  <div
                    className={`text-sm ${isConnected ? "text-red-700" : "text-slate-800"}`}
                  >
                    {P.name}
                  </div>

                  <div className="truncate text-xs text-slate-500">
                    {isConnected ? "Already Connected" : P.description}
                  </div>
                </div>

                {/* Status */}
                {isConnected && (
                  <CheckCircleIcon className="size-4 shrink-0 text-red-500" />
                )}

                {isConnecting && (
                  <div className="size-4 shrink-0 animate-spin rounded-full border-2 border-red-600 border-t-transparent" />
                )}

                {!isConnected && !isConnecting && (
                  <ExternalLinkIcon className="size-3.5 shrink-0 text-slate-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformPickerModal;