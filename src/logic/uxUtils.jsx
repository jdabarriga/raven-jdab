import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';
import PublicOffIcon from '@mui/icons-material/PublicOff';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ClassIcon from '@mui/icons-material/Class';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';

// Gets the proper tailwind colors for a class
export function getClassColor(abstract, interFace) {
  if (interFace) {
    return "bg-gradient-to-b from-[#2e1503] to-[#4d4505]"; // Color for interface
  } else if (abstract) {
    return "bg-gradient-to-b from-[#290316] to-[#630404]"; // Color for abstract 
  }
  else {
    return "bg-gradient-to-b from-[#0f052e] to-[#0c195e]";
  }
}

// Gets the proper access symbol for classes
export function getClassAccess(access, size="small") {
  switch (access) {
    case "public":
      return (
        <Tooltip title="Public" className='items-center justify-center'>
          <PublicIcon fontSize={size} className='rounded-xl bg-green-500  hover:' />
        </Tooltip>
      );
    case "private":
      return (
        <Tooltip title="Private" className='items-center justify-center'>
          <LockIcon fontSize={size} className='rounded-xl bg-red-500 hover:' />
        </Tooltip>
      );
    default:
      return (
        <Tooltip title="Default" className='items-center justify-center'>
          <PublicOffIcon fontSize={size} className='rounded-xl bg-yellow-500 hover:' />
        </Tooltip>
      );
  }
}

// Gets a tailwind color corresponding to a native java type or String
export function getMemberTypeColor(type) {
  switch (type) {
    case "byte":
      return "bg-red-700 p-1";
    case "short":
      return "bg-orange-700 p-1";
    case "int":
      return "bg-yellow-700 p-1";
    case "long":
      return "bg-green-700 p-1";
    case "double":
      return "bg-blue-700 p-1";
    case "float":
      return "bg-purple-700 p-1";
    case "char":
      return "bg-teal-700 p-1";
    case "boolean":
      return "bg-lime-700 p-1";
    case "String":
      return "bg-pink-700 p-1";
    case "void":
      return "bg-indigo-700 p-1";
    default:
      return "bg-gray-700 p-1"; // Default color for unknown types
  }
}

// Gets an icon based on a member's access
export function getAccessTypeIcon(access) {
  switch (access) {
    case "public":
      return (
        <Tooltip title="Public" className='items-center justify-center'>
          <LockOpenIcon fontSize='small' className='rounded-xl bg-green-600 p-1 hover:' />
        </Tooltip>
      );
    case "private":
      return (
        <Tooltip title="Private" className='items-center justify-center'>
          <LockIcon fontSize='small' className='rounded-xl bg-red-600 p-1' />
        </Tooltip>
      );
    case "protected":
      return (
        <Tooltip title="Protected" className='items-center justify-center'>
          <LockIcon fontSize='small' className='rounded-xl bg-orange-600 p-1' />
        </Tooltip>
      );
    default:
      return (
        <Tooltip title="Default (Package Private)" className='items-center justify-center'>
          <InventoryIcon fontSize='small' className='rounded-xl bg-yellow-600 p-1' />
        </Tooltip>
      );
  }
}

// Gets an icon to represent a class, abstract class, or interface
export function getClassIcon(isInterface, isAbstract) {
  if (isInterface) {
    return (
      <Tooltip title="Interface" className='items-center justify-center mr-1'>
        <AccountTreeIcon fontSize='medium' style={{ color: 'white', margin: '2px' }} className='hover:' />
      </Tooltip>
    );
  } else if (isAbstract) {
    return (
      <Tooltip title="Abstract" className='items-center justify-center mr-1'>
        <CategoryIcon fontSize='medium' style={{ color: 'white', margin: '2px' }}
          className='hover:' />
      </Tooltip>
    );
  }
  else {
    return (
      <Tooltip title='Class' className='items-center justify-center mr-1'>
        <ClassIcon fontSize='medium' style={{ color: 'white', margin: '2px' }}
          className='hover:' />
      </Tooltip>
    );
  }
}

export function limitString (string, size) {
  let substr = string.substring(0, size);
  return substr === string ? string : substr.substring(0, substr.length - 3) + "...";
}