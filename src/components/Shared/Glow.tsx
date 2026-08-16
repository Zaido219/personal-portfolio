import { type ReflectedGlowProps} from "../../interface/types";

/**
 * SRP: Manages ambient backlighting mechanics (stacking context, blur, and positioning)
 * OCP: Accepts any JSX child/styling without requiring explicit color props or config changes
 */
export const ReflectedGlow = ({ 
  children, 
  blur = 'blur-md', 
  opacity = 'opacity-50',
  hoverOpacity = 'group-hover:opacity-80' 
} : ReflectedGlowProps) => {
  return (
    <div className="relative isolate inline-flex group">
      {/* Background Reflection Layer */}
      <div
        aria-hidden="true"
        className={`absolute -inset-0.5 ${blur} ${opacity} ${hoverOpacity} -z-10 transition-opacity duration-300 pointer-events-none select-none`}
      >
        {children}
      </div>

      {/* Primary Interactive Child */}
      {children}
    </div>
  );
};