@extends('layout.master')

@section('content')
<app-home :user="{{$user}}"></app-home>
@endsection