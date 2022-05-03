import React from 'react';
import '../index.css';

interface InputProps {
  

  placeholder: string
  font?: "ui-sans-serif" | "system-ui" | "-apple-system" | "BlinkMacSystemFont" | "Segoe UI" | "Roboto" | "Helvetica Neue"| "Arial" | "Noto Sans" | "sans-serif" | "Apple Color Emoji"| "Segoe UI Emoji"| "Segoe UI Symbol"| "Noto Color Emoji"
  textsize?: "text-lg" |  "text-xl9"
  label: string;

}

/**
 * Primary UI component for user interaction
 */
export const Input = ({

  font = "Arial",
  label = "example",
 
  
  
}: InputProps) => {
  
  return (
    <input
      type="text"
    
      value={label}
      

     />
      
    
  );
};
