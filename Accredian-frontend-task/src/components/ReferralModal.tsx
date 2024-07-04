import React from 'react';
import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',  // Replace with your actual backend URL
  timeout: 10000,  // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ReferralModalProps {
  open: boolean;
  handleClose: () => void;
}

interface FormInputs {
  referrerName: string;
  referrerEmail: string;
  refereeName: string;
  refereeEmail: string;
  course: string;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ open, handleClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await api.post('/referrals', data);
      handleClose();
    } catch (error) {
      console.error('Error submitting referral', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Refer a Course
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                {...register('referrerName', { required: true })}
                error={!!errors.referrerName}
                helperText={errors.referrerName ? 'Name is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Email"
                type="email"
                {...register('referrerEmail', { required: true })}
                error={!!errors.referrerEmail}
                helperText={errors.referrerEmail ? 'Email is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Friend's Name"
                {...register('refereeName', { required: true })}
                error={!!errors.refereeName}
                helperText={errors.refereeName ? 'Name is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Friend's Email"
                type="email"
                {...register('refereeEmail', { required: true })}
                error={!!errors.refereeEmail}
                helperText={errors.refereeEmail ? 'Email is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Course"
                {...register('course', { required: true })}
                error={!!errors.course}
                helperText={errors.course ? 'Course is required' : ''}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ReferralModal;

