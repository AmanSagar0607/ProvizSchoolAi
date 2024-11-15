import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './components/ui/table';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Application } from '../types/admin';

const AdminDashboard: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin');
        return;
      }

      try {
        const response = await fetch('https://proviz-backend-service-api.vercel.app/api/admin/applications', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!response.ok) throw new Error('Failed to fetch applications');
        
        const data: Application[] = await response.json();
        setApplications(data);
      } catch (error) {
        console.error('Error fetching applications:', error);
        setError('Failed to fetch applications. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this application?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`https://proviz-backend-service-api.vercel.app/api/admin/applications/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!response.ok) throw new Error('Failed to delete application');
      
      setApplications(applications.filter(app => app._id !== id));
    } catch (error) {
      console.error('Error deleting application:', error);
      setError('Failed to delete application. Please try again later.');
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-600 mb-6">Admin Dashboard</h1> {/* Header for Admin Dashboard */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Applications</CardTitle>
          <Button onClick={handleLogout} variant="outline">Logout</Button>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Personal Statement</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.length > 0 ? (
                applications.map((app) => (
                  <TableRow key={app._id}>
                    <TableCell>{app.name}</TableCell>
                    <TableCell>{app.email}</TableCell>
                    <TableCell>{app.phone}</TableCell>
                    <TableCell>{app.statement}</TableCell>
                    <TableCell>{new Date(app.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button 
                        onClick={() => handleDelete(app._id)}
                        variant="destructive"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">No applications found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
