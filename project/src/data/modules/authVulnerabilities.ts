import { CourseModule } from '../../types/course';
import { authVulnerabilitiesLevel1Modules } from './authVulnerabilities/level1';
import { authVulnerabilitiesLevel2Modules } from './authVulnerabilities/level2';
import { authVulnerabilitiesLevel3Modules } from './authVulnerabilities/level3';

// Combine all Authentication Vulnerabilities modules
export const authVulnerabilitiesModules: CourseModule[] = [
  ...authVulnerabilitiesLevel1Modules,
  ...authVulnerabilitiesLevel2Modules,
  ...authVulnerabilitiesLevel3Modules,
];