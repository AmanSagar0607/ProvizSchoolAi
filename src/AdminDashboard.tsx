// import React, { useState, useEffect } from 'react';
import React, { useState, useEffect, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Trash2,
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  Download,
  RefreshCw,
  LogOut,
} from 'lucide-react';
import { API_BASE_URL } from '@/config/api';

interface Application {
  _id: string;
  name: string;
  email: string;
  phone: string;
  statement: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchApplications = useCallback(async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/applications/applications`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }
      const data = await response.json();
      setApplications(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const fetchApplications = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/applications/applications`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }

      const data = await response.json();
      setApplications(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/applications/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (response.ok) {
        setApplications(applications.filter(app => app._id !== id));
      }
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  const filteredApplications = applications.filter(application =>
    application.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    application.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-6">
        {loading ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <RefreshCw className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-sm sm:text-base">Total Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl sm:text-3xl font-bold">{applications.length}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-sm sm:text-base">Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl sm:text-3xl font-bold">
                  {applications.filter(app => 
                    new Date(app.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                  ).length}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">Last 7 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-sm sm:text-base">Search Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl sm:text-3xl font-bold">{filteredApplications.length}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Matching applications</p>
              </CardContent>
            </Card>
          </div>
        )}

        {!loading && (
          <Card>
            <CardHeader className="p-3 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <CardTitle className="text-lg sm:text-2xl">Applications Dashboard</CardTitle>
                  <CardDescription className="text-sm">Manage and review all student applications</CardDescription>
                </div>
                <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                  <Button variant="outline" size="sm" onClick={fetchApplications} className="text-xs sm:text-sm">
                    <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Refresh
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                    <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Export
                  </Button>
                  <Button variant="destructive" size="sm" onClick={handleLogout} className="text-xs sm:text-sm">
                    <LogOut className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-3 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-3 w-3 sm:h-4 sm:w-4" />
                  <Input
                    placeholder="Search applications..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 sm:pl-10 text-sm h-8 sm:h-10"
                  />
                </div>
                <Badge variant="secondary" className="text-xs sm:text-sm">
                  Total Applications: {applications.length}
                </Badge>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-xs sm:text-sm">Name</TableHead>
                      <TableHead className="text-xs sm:text-sm">Contact</TableHead>
                      <TableHead className="text-xs sm:text-sm hidden md:table-cell">Statement</TableHead>
                      <TableHead className="text-xs sm:text-sm">Date</TableHead>
                      <TableHead className="text-xs sm:text-sm text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplications.map((application) => (
                      <TableRow key={application._id}>
                        <TableCell className="text-xs sm:text-sm font-medium">{application.name}</TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          <div className="space-y-0.5 sm:space-y-1">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                              <span>{application.email}</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                              <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                              <span>{application.phone}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs hidden md:table-cell">
                          <p className="truncate text-xs sm:text-sm text-muted-foreground">
                            {application.statement}
                          </p>
                        </TableCell>
                        <TableCell className="text-xs sm:text-sm">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                            <span>{formatDate(application.createdAt)}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-6 w-6 sm:h-8 sm:w-8">
                                <MoreVertical className="h-3 w-3 sm:h-4 sm:w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="text-xs sm:text-sm">
                              <DropdownMenuItem
                                className="text-destructive"
                                onClick={() => handleDelete(application._id)}
                              >
                                <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;